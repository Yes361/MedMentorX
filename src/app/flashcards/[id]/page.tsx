import { getFlashCardByID } from "@/actions/MongoDatabase"
import ClientApp from "./ClientPage"

export default async function App({ params }: { params: { id: string } } ) {
  const data = await getFlashCardByID(params.id)
  
  return (
    <ClientApp data={data}/>
  )
}
