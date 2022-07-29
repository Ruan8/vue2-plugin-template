import Vue from "vue";

export const mountComponent = async (component, element) => {
  if (element === undefined) return;
  element =
    typeof element === "string" ? document.querySelector(element) : element;
  const componentConstructor = Vue.extend(component);
  const example = new componentConstructor().$mount(
    document.createElement("div")
  );
  element.appendChild(example.$el);
};
