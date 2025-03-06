# Portfolio Repository

This portfolio was originally created using raw HTML, CSS, and JS. After learning Blazor, it was transitioned to WebAssembly and now stays as a contained auto publishing environment.


- By creating and pushing a PR from development to main, Github Actions will hook onto the source code and use Ubuntu to publish our Blazor App to WebAssembly in release.  
- Thanks to [JamesIves "github-pages-deploy-action"]("https://github.com/JamesIves/github-pages-deploy-action"), we then can take the published WebAssembly from our release branch and deploy it straight to Github Pages.
