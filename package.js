Package.describe({
  summary: "changesets - text-based concurrent multi-user using operational transformation"
});

Npm.depends({"changesets": "0.2.7"});

Package.on_use(function (api) {
  api.add_files("changesets.js", "server");
  api.add_files("client-side.js", "client");
});
