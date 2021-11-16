import { onBeforeUnmount, onMounted, onUpdated, ref } from "vue";
import ReactDOM from "react-dom";
import React from "react";

export const reactCompProxy = ({
                            name,
                            props={},
                            reactComp
                        }) => {

    return {
        name: name,
        props,
        setup(props) {
            const root = ref(null);
            const error = ref(null);
            const ButtonComponent = ref(null);

            function updateReactComponent() {
                if (!ButtonComponent.value || !!error.value) return;

                ReactDOM.render(
                    React.createElement(ButtonComponent.value, props),
                    root.value
                );
            }

            function unmountReactComponent() {
                root.value && ReactDOM.unmountComponentAtNode(root.value);
            }

            onMounted(updateReactComponent);
            onUpdated(updateReactComponent);
            onBeforeUnmount(unmountReactComponent);

            reactComp()
                .then((b) => {
                    ButtonComponent.value = b;
                    updateReactComponent();
                })
                .catch((e) => {
                    error.value = e;
                });

            return { root, error };
        },
        template: `
          <!-- this element is just served to mount the React element  -->
          <div v-if="error">error loading button</div>
          <div v-else ref="root">loading button...</div>
        `,
    };
};
