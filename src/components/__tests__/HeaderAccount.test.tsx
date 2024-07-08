import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderAccount from "../header/HeaderAccount";
import { Link, MemoryRouter, Route, Router, Routes } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";

jest.mock("recoil");

describe("HeaderAccount", () => {
  let setAuthStateMock;

  beforeEach(() => {
    setAuthStateMock = jest.fn();
    (useSetRecoilState as jest.Mock).mockReturnValue(setAuthStateMock);
  });

  it("renders the account list", () => {
    render(
      <MemoryRouter>
        <HeaderAccount />
      </MemoryRouter>,
    );
    expect(screen.getByText("Address")).toBeDefined();
    expect(screen.getByText("Orders")).toBeDefined();
    expect(screen.getByText("Help?")).toBeDefined();
  });

  it("navigates to the correct URL when a link is clicked", () => {
    function AddressDisplay() {
      return <pre>Address Page</pre>;
    }

    function HeaderAccountMock() {
      return (
        <li>
          <Link to="/account/address">Address</Link>
        </li>
      );
    }
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HeaderAccountMock />} />
          <Route path="/account/address" element={<AddressDisplay />} />
        </Routes>
      </MemoryRouter>,
    );
    const addressLink = screen.getByText("Address");
    fireEvent.click(addressLink);

    expect(screen.getByText("Address Page")).toBeDefined();
  });

  it("calls setAuthState with null when logout button is clicked", () => {
    render(
      <MemoryRouter>
        <HeaderAccount />
      </MemoryRouter>,
    );
    expect(screen.getByText("LOG OUT")).toBeDefined();
    const logoutButton = screen.getByText("LOG OUT");
    fireEvent.click(logoutButton);

    expect(setAuthStateMock).toHaveBeenCalledWith(null);
  });
});
