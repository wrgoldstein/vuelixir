defmodule Vuelixir.Router do
  use Agent
  use Plug.Router
  use Plug.Builder

  plug Plug.Static,
    at: "/dist",
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
    {:ok, _} = Plug.Adapters.Cowboy.http(Vuelixir.Router, [])
  end
end
