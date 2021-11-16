import { reactCompProxy } from './reactCompProxy';

export default reactCompProxy({
    name: "ReactTable",
    reactComp: async () => (await import("remote1/Table")).default
});
