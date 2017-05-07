
const getHashSwitch = (cases) => {
    let hash = {};
    
    cases.forEach((option) => {
        hash[option.key] = option.reduce;
    });

    return hash;
};

export default getHashSwitch;