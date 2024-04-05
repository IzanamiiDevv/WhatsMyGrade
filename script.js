//WASM

let wasmMemory = new WebAssembly.Memory({ initial: 256, maximum: 256 });
let wasmTable = new WebAssembly.Table({
    initial: 1,
    maximum: 1,
    element: 'anyfunc'
});


let asmLibraryArg = {
    __handle_over_flow: () => {},
    emscripten_resize_heap: () => {},
    __lock: () => {},
    __unlock: () => {},
    memory: wasmMemory,
    table: wasmTable
};


let info = {
    env: asmLibraryArg,
    wasi_snapshot_preview1: asmLibraryArg
};


async function instantiate() {
    let response = await fetch('operator.wasm');
    let bytes = await response.arrayBuffer();
    let wasmObj = await WebAssembly.instantiate(bytes, info);
    return new Promise(res => res(wasmObj.instance.exports))
}


instantiate().then(method => {});