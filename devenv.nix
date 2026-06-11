{ pkgs, ... }:

let
  projectPnpm = pkgs.writeShellApplication {
    name = "pnpm";
    text = ''
      exec ${pkgs.pnpm}/bin/pnpm --pm-on-fail=ignore --config.confirmModulesPurge=false "$@"
    '';
  };
in {
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
  };

  packages = with pkgs; [
    git
    gh
    jq
    ripgrep
    fd
    typescript-language-server
    vscode-langservers-extracted
    tailwindcss-language-server
    nil
    nixd
    alejandra
    statix
    deadnix
    projectPnpm
  ];

  env = {
    NEXT_TELEMETRY_DISABLED = "1";
    NODE_EXTRA_CA_CERTS = "/etc/pki/tls/certs/ca-bundle.crt";
    PORTLESS_APP_NAME = "adrianmross-github-io";
    PORTLESS_REQUIRED_NODE_MAJORS = "22 24";
  };

  enterShell = ''
    : "''${LOCAL_CACHE:=0}"

    export XDG_CACHE_HOME="''${XDG_CACHE_HOME:-$HOME/.cache}"
    export XDG_CONFIG_HOME="''${XDG_CONFIG_HOME:-$HOME/.config}"
    export XDG_DATA_HOME="''${XDG_DATA_HOME:-$HOME/.local/share}"
    export XDG_STATE_HOME="''${XDG_STATE_HOME:-$HOME/.local/state}"

    if [ "''${LOCAL_CACHE:-0}" = "1" ]; then
      export XDG_CACHE_HOME="$PWD/.cache"
      export XDG_CONFIG_HOME="$PWD/.local/config"
      export XDG_DATA_HOME="$PWD/.local/share"
      export XDG_STATE_HOME="$PWD/.local/state"
    fi

    mkdir -p \
      "$XDG_CACHE_HOME" \
      "$XDG_CONFIG_HOME" \
      "$XDG_DATA_HOME" \
      "$XDG_STATE_HOME"

    if [ -f /etc/pki/tls/certs/ca-bundle.crt ]; then
      export NODE_EXTRA_CA_CERTS="''${NODE_EXTRA_CA_CERTS:-/etc/pki/tls/certs/ca-bundle.crt}"
    fi

    echo "adrianmross.github.io dev env"
    echo "  pnpm install --frozen-lockfile"
    echo "  pnpm run dev"
    echo "  wt dev"
  '';

  scripts.versions.exec = ''
    node --version
    pnpm --version
    portless-worktree-dev --help >/dev/null
  '';

  tasks = {
    "dev:versions".exec = "versions";
    "dev:install".exec = "pnpm install --frozen-lockfile";
    "dev:typecheck".exec = "pnpm run typecheck";
    "dev:build".exec = "pnpm run build";
    "dev:portless".exec = "pnpm run dev:portless";
  };

  enterTest = ''
    node --version | grep -E '^v(22|24)\.'
    pnpm --version
  '';
}
