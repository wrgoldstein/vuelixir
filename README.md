Make a new elixir app with a supervisor:

```
mix new PATH --sup
```

Add Cowboy and Plug to the dependencies (cowboy 2.x is not yet supported)

```ex
# `mix.exs`
defp deps do
  [
    {:cowboy, "~> 1.0.0"},
    {:plug, "~> 1.0.0"}
  ]
end
```

Add a `router.ex` file under `lib/<your-app>`:

```ex
# lib/app/router.ex

defmodule YourApp.Router do
  use Agent
  use Plug.Router
  use Plug.Builder

  plug Plug.Static,  # allow static assets to be served
    at: "/static",
    from: File.cwd! <> "/dist"

  plug :match
  plug :dispatch

  def init(options) do
    # initialize options
    options
  end

  get "/" do
    {:ok, html} = File.read "index.html"
    conn
    |> put_resp_content_type("text/html")
    |> send_resp(200, html)
  end

  match _ do
    conn
    |> send_resp(404, "Ooops")
  end
  

  def start_link(_options) do
    {:ok, _} = Plug.Adapters.Cowboy.http(YourApp.Router, [])
  end
end

```