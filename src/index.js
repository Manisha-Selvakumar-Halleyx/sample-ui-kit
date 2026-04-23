import MyButton from "./components/MyButton.vue";
import TextBox from "./components/MyTextBox.vue";

const components = {
  MyButton,
  TextBox,
};

export { MyButton, TextBox };

export default {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
