const allItems = [
      { id: "item1", text: "Bouteille plastique", type: "recyclable" },
      { id: "item2", text: "Bouteille en verre", type: "verre" },
      { id: "item3", text: "Mouchoir usagé", type: "ordures" },
      { id: "item4", text: "Boîte en carton", type: "recyclable" },
      { id: "item5", text: "Pot de confiture", type: "verre" },
      { id: "item6", text: "Canette", type: "recyclable" },
      { id: "item7", text: "Verre cassé", type: "verre" },
      { id: "item8", text: "Couches usagées", type: "ordures" },
      { id: "item9", text: "Papier journal", type: "recyclable" },
      { id: "item10", text: "Ampoule", type: "ordures" }
    ];

    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData("text");
      const item = document.getElementById(data);
      const bin = ev.currentTarget;
      const binType = bin.parentElement.getAttribute("data-type") || bin.getAttribute("data-type");
      const itemType = item.getAttribute("data-type");

      if (binType === itemType) {
        playSound(binType);
        item.remove();
      } else {
        alert("Ce n'est pas la bonne poubelle !");
      }
    }

    function playSound(type) {
      const audio = document.getElementById("sound-" + type);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }

    function resetGame() {
      const container = document.getElementById("itemsContainer");
      container.innerHTML = "";

      document.querySelectorAll('.bin-content').forEach(content => content.innerHTML = "");

      allItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.draggable = true;
        div.ondragstart = drag;
        div.setAttribute("data-type", item.type);
        div.id = item.id;
        div.textContent = item.text;
        div.style.backgroundColor = "white";
        div.style.cursor = "grab";
        container.appendChild(div);
      });
    }

    window.onload = resetGame;