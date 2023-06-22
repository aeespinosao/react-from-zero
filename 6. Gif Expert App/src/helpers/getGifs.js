export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UE5TF1v8ikDVYy6t62FbPX3hywhnfE7x&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.table(gifs)

    return gifs;
}   