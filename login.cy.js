/// <reference types="cypress" />

describe("Successfullt Login Account Registered", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  afterEach(() => {
    cy.get("#react-burger-menu-btn").click();
    cy.get(".logout_sidebar_link").click();
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("locked_out_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("problem_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("performance_glitch_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("error_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Valid login with username and password", () => {
    cy.get("[data-test=username]").type("visual_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Failed Login With Username and Password", () => {
    cy.get("[data-test=username]").type("qwerty");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login wrong username and valid password", () => {
    cy.get("[data-test=username]").type("qwerty");
    cy.get("[data-test=password]").type("secret_user");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("locked_out_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("problem_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("performance_glitch_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("error_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed login valid username and wrong password", () => {
    cy.get("[data-test=username]").type("visual_user");
    cy.get("[data-test=password]").type("ytrewq");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  it("Input valid username and valid password with CapitalCamel			", () => {
    cy.get("[data-test=username]").type("visua_lUser");
    cy.get("[data-test=password]").type("secret_Sauce");
    cy.get("[data-test=login-button]").click();
    cy.get(".error-message-container error").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
