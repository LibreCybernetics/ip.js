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
    prettier
  ];

  languages.javascript = {
    enable = true;
    package = pkgs.deno;
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
