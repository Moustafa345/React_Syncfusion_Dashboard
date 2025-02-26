import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
          <div className="flex items-center justify-center flex-wrap gap-20 ">
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
              <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change} />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
              <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change} />
            </div>
          </div>
      </div>  
    </div>
  );
};

export default ColorPicker;
