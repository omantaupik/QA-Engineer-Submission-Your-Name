/// <reference types="cypress" />

describe("Checkout Item Product", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
  });

  it("checkout payment item product", () => {
    cy.get("#btn btn_primary btn_small btn_inventory").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("oman");
    cy.get("#last-name").type("taupik");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();
    cy.get(".summary_info_label").contains("Price Total");
    cy.get("#finish").click();
    cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
  });

  it("Checkout payment not item quantity", () => {
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
  });

  it("checkout payment item product", () => {
    cy.get("#btn btn_primary btn_small btn_inventory").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#continue").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Error: First Name is required"
    );
  });
});
