import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "Dragon Ball Z";

  test("debe de mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("debe de mostrar items cuando se cargan las imagenes por el useFetchGifs ", () => {
    const gifs = [
      {
        id: "ASD",
        title: "Gohan",
        url: "https://google.com/",
      },
      {
        id: "QWE",
        title: "Naruto",
        url: "https://google.com/",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
