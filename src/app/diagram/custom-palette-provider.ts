export class CustomPaletteProvider {
    static $inject = ["palette"];
    constructor(palette) {
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      return function (entries) {
        console.log(entries);
  
        return {
          "create.start-event": entries["create.start-event"],
          "create.task": entries["create.task"],
          "create.subprocess-expanded": entries["create.subprocess-expanded"],
          "create.data-object": entries["create.data-object"],
          "create.end-event": entries["create.end-event"]
        };
      };
    }
  }
  
  

  export default {
    __init__: ["customPaletteProvider"],
    customPaletteProvider: ["type", CustomPaletteProvider]
  };
  