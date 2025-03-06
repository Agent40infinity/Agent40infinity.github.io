# Portfolio Repository

This portfolio was originally created using raw HTML, CSS, and JS. After learning Blazor, it was transitioned to WebAssembly and now stays as a contained auto publishing environment.


- By creating and pushing a PR from development to main, Github Actions will hook onto the source code and use Ubuntu to publish the WebAssembly Blazor App.  
- Thanks to [JamesIves "github-pages-deploy-action"]("https://github.com/JamesIves/github-pages-deploy-action"), we then can take the published WebAssembly from release and deploy straight to Github Pages.
