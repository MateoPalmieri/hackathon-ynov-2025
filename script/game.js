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

  // Joue le son selon le type de poubelle
  function playSound(type) {
    const audio = document.getElementById("sound-" + type);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  // Initialise la liste des déchets
  function resetGame() {
    const container = document.getElementById("itemsContainer");
    container.innerHTML = "";

    document.querySelectorAll(".bin-content").forEach((content) => (content.innerHTML = ""));

    allItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.setAttribute("data-type", item.type);
      div.id = item.id;
      div.textContent = item.text;
      div.style.backgroundColor = "white";
      div.style.cursor = "grab";
      div.style.position = "relative";

      // Drag & drop natif desktop
      div.draggable = true;
      div.ondragstart = drag;

      // Touch events pour mobile
      div.addEventListener("touchstart", touchStart, { passive: false });
      div.addEventListener("touchmove", touchMove, { passive: false });
      div.addEventListener("touchend", touchEnd);

      container.appendChild(div);
    });
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  // Variables pour touch drag
  let draggedItem = null;
  let offsetX = 0;
  let offsetY = 0;

  function touchStart(e) {
    e.preventDefault();
    draggedItem = e.target;

    const rect = draggedItem.getBoundingClientRect();
    const touch = e.touches[0];
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;

    draggedItem.style.position = "fixed";
    draggedItem.style.zIndex = 1000;
    moveAt(touch.clientX, touch.clientY);
  }

  function moveAt(clientX, clientY) {
    if (!draggedItem) return;
    draggedItem.style.left = clientX - offsetX + "px";
    draggedItem.style.top = clientY - offsetY + "px";
  }

  function touchMove(e) {
    e.preventDefault();
    if (!draggedItem) return;
    const touch = e.touches[0];
    moveAt(touch.clientX, touch.clientY);
  }

  function resetDraggedItemPosition() {
    if (!draggedItem) return;
    draggedItem.style.position = "relative";
    draggedItem.style.left = "";
    draggedItem.style.top = "";
    draggedItem.style.zIndex = "";
  }

  function touchEnd(e) {
    if (!draggedItem) return;
    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

    // Remonter jusqu'au parent .bin
    let bin = dropTarget;
    while (bin && !bin.classList.contains("bin")) {
      bin = bin.parentElement;
    }

    if (bin && bin.hasAttribute("data-type")) {
      const binType = bin.getAttribute("data-type");
      const itemType = draggedItem.getAttribute("data-type");
      if (binType === itemType) {
        playSound(binType);
        draggedItem.remove();
      } else {
        alert("Ce n'est pas la bonne poubelle !");
        resetDraggedItemPosition();
      }
    } else {
      resetDraggedItemPosition();
    }
    draggedItem = null;
  }

  // Drop natif desktop
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const item = document.getElementById(data);
    const bin = ev.currentTarget;
    const binType = bin.getAttribute("data-type");
    const itemType = item.getAttribute("data-type");

    if (binType === itemType) {
      playSound(binType);
      item.remove();
    } else {
      alert("Ce n'est pas la bonne poubelle !");
    }
  }

  window.onload = resetGame;