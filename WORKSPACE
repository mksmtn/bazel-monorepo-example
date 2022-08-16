workspace(name="bazel_test_project")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

## Python

http_archive(
    name = "rules_python",
    sha256 = "56dc7569e5dd149e576941bdb67a57e19cd2a7a63cc352b62ac047732008d7e1",
    strip_prefix = "rules_python-0.10.0",
    url = "https://github.com/bazelbuild/rules_python/archive/refs/tags/0.10.0.tar.gz",
)

load("@rules_python//python:repositories.bzl", "python_register_toolchains")

python_register_toolchains(
    name = "python3_9",
    # Available versions are listed in @rules_python//python:versions.bzl.
    # We recommend using the same version your team is already standardized on.
    python_version = "3.9",
)

load("@python3_9//:defs.bzl", "interpreter")

load("@rules_python//python:pip.bzl", "pip_install")

pip_install(
  name = "python_deps",
  requirements = "//third-party:requirements.txt"
)

## Node.JS

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "ee3280a7f58aa5c1caa45cb9e08cbb8f4d74300848c508374daf37314d5390d6",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.5.3/rules_nodejs-5.5.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")

build_bazel_rules_nodejs_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install", "npm_install")

node_repositories(
  node_version = "16.16.0",
  yarn_version = "1.22.19",
  node_repositories = {
    "16.16.0-linux_amd64": ("node-v16.16.0-linux-x64.tar.xz", "node-v16.16.0-linux-x64", "edcb6e9bb049ae365611aa209fc03c4bfc7e0295dbcc5b2f1e710ac70384a8ec"),
  },
)

# Install dependencies for monorepo scoped package.json.
# Usage: bazel run @yarn//:yarn -- <arguments passed to yarn>
# Example (yarn add): bazel run @yarn//:yarn -- add <package>
yarn_install(
  name = "global_npm",
  package_json = "//typescript:package.json",
  yarn_lock = "//typescript:yarn.lock",
)

# Install dependencies for Restaurant UI.
# Usage: bazel run @nodejs_host//:npm -- <arguments passed to npm>
# Example (npm install): bazel run @nodejs_host//:npm -- install <package>
# This project uses npm instead of yarn and requires
# different version of Angular, therefore it has its own package.json.
npm_install(
  name = "ui_restaurant_npm",
  package_json = "//typescript/projects/ui/restaurant:package.json",
  package_lock_json = "//typescript/projects/ui/restaurant:package-lock.json",
)

# Install dependencies for Orders Service.
# Usage: bazel run @nodejs_host//:npm -- <arguments passed to npm>
# Example (npm install): bazel run @nodejs_host//:npm -- install <package>
# This project uses npm instead of yarn and requires
# different version of Nest.JS, therefore it has its own package.json.
npm_install(
  name = "services_orders_npm",
  package_json = "//typescript/projects/services/orders:package.json",
  package_lock_json = "//typescript/projects/services/orders:package-lock.json",
)
