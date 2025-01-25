// Assuming your product data is available in an array named 'wallpapers'
    const wallpapers = [
      // Your wallpaper data objects with properties like 'imageUrl', 'title', etc.
    ];

    function searchWallpapers() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      const productGrid = document.getElementById("productGrid");
      productGrid.innerHTML = ""; // Clear previous results

      wallpapers.forEach(wallpaper => {
        const title = wallpaper.nature.toLowerCase();
        if (nature.includes(searchTerm)) {
          // Create product element for matching wallpaper
          const product = document.createElement("div");
          product.classList.add("product");
          product.innerHTML = `
            <img src="${wallpaper.C:\Users\CD FEVER\Documents\Atom\IMG\img1.jpg}" alt="Product">
            <h3>${wallpaper.nature}</h3>
            <button>Download</button>
            <button>Add to Favourites</button>
          `;
          productGrid.appendChild(product);
        }
      });
    }
