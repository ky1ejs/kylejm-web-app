
export interface InstaPost {
  caption: string
  likes: number
  lowRes: string
  link: string
}

export async function getInstaPosts(): Promise<InstaPost[]> {
  let reponse = await fetch('https://kylejm.herokuapp.com/v1/insta')
  let { data } = await reponse.json()
  return data.map((postData: any) => {
    return {
      caption: postData.caption.text,
      likes: postData.likes.count,
      lowRes: postData.images.low_resolution.url,
      link: postData.link
    }
  })
}
