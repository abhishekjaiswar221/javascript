async function musicAPI(music) {
  try {
    const url = "https://api.7digital.com/1.2/";
    const response = await fetch(url);
    const result = await response.text();
    
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

musicAPI();
