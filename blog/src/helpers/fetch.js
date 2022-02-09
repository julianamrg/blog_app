const baseUrl = "https://chat-back-app.herokuapp.com/api";
//mysql://utbf2oj0wk5jgczm:T39Q4e0z4EiHW4JiXqas@b206kamhrlk5vvmxeu5r-mysql.services.clever-cloud.com:3306/b206kamhrlk5vvmxeu5r

export const sendData = async (endpoint, data) => {
    const url = `${baseUrl}/${endpoint}`;
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return resp.json();
};

export const getData = async (endpoint) => {
    const url = `${baseUrl}/${endpoint}`;
    const resp = await fetch(url);
    return resp.json();
};

export const updateData = async (endpoint, data) => {
    const url = `${baseUrl}/${endpoint}`;
    const resp = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return resp.json();
};
