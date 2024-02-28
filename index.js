const idLayers = ["layer-welcome", "layer-nama", "layer-game"]
let idxLayer = 0
let gameConfig = {
    mode: "",
    level: 0,
    name_p1: "",
    name_p2: ""
}

function LayerHideAll() {
    for(let i=0; i < idLayers.length; i++) {
        const el = document.getElementById(idLayers[i])
        el.classList.remove("active")
    }
}
function LayerShow(idx) {
    LayerHideAll()

    const el = document.getElementById(idLayers[idx])
    el.classList.add("active")

    if(idx == 1) {
        let el_input = document.querySelector("#nama_p2").parentElement
        if (gameConfig.mode == "bot") {
            el_input.classList.add("d-hide")
        } else {
            el_input.classList.remove("d-hide")
        }
    }
}

function TogglePlayBtn() {
    const btn_play = document.querySelector(".btn-play")
    if( gameConfig.mode != "" && gameConfig.level != 0 )
    {
        btn_play.removeAttribute("disabled")
    }
    else {
        btn_play.setAttribute("disabled", "true")
    }
}
function SetMode(mode) {
    gameConfig.mode = mode
    TogglePlayBtn()
}
function SetLevel(level) {
    gameConfig.level = level
    TogglePlayBtn()
}
function InputName(event) {
    const el = event.target
    if (el.id == "nama_p1") {
        gameConfig.name_p1 = el.value
    }
    if (el.id == "nama_p2") {
        gameConfig.name_p2 = el.value
    }

    const btn_play = document.querySelector("#layer-nama .btn-play")
    if (gameConfig.mode == "bot") {
       gameConfig.name_p2 = 'BOT'
    }

    if (gameConfig.name_p1 == "" || gameConfig.name_p2 == "") {
        btn_play.setAttribute("disabled", "true")
    } else {
        btn_play.removeAttribute("disabled")
    }
}

function InitGame() {
    LayerShow(2)
    const gameCanvas = document.querySelector(".game-canvas")
    gameCanvas.innerHTML = "" // clear element
    const gridCol = 10
    const gridRow = 8

    for (let i=0; i < gridRow; i++) {
        const div = document.createElement("div")
        div.classList.add("game-hexa")
    }
}

LayerShow(0)
