{ config
, lib
, pkgs
, inputs
, napalm
, ...
}:

let
  fileMask = "\\.(json|ts)$";
in {

  packages = with pkgs; with nodePackages; [
    assemblyscript
    eslint
    git
    npm
    prettier
  ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };
  languages.typescript.enable = true;

  pre-commit.hooks.eslint = {
    name = "ESLint";
    enable = true;

    entry = "eslint";
    files = fileMask;
  };

  pre-commit.hooks.prettier = {
    name = "Prettier";
    enable = true;

    entry = "prettier";
    files = fileMask;
  };

  # Generic

  cachix.enable = false;
  difftastic.enable = true;
  pre-commit.hooks.shellcheck.enable = true;
}
