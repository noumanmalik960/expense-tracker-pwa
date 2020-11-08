

export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swUrl).then((response) => {
      console.log("SW registered successfully at: ", response.scope);
    }).catch((error) => {
      console.log("SW did not register with error: ", error);
    })
  }
}