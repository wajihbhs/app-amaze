export const hydrate = (model: any, data: any) => {
        for (const key of Object.keys(model)) {
            if (undefined !== data[key]) {
                model[key] = data[key];
            }
        }
    }
;
