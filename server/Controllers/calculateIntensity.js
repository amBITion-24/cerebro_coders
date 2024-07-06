const calculateIntensity = () => {
  const { img } = req.body;
  axios({
    method: "POST",
    url: "https://detect.roboflow.com/detection-accident-yb0lz/7",
    params: {
      api_key: "TL8nSM9a5QphEKS40S6h",
    },
    data: img,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};
export default calculateIntensity;
