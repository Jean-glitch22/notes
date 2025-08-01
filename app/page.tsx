import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"

export default async function Home() {
  const cookieStore = cookies ()
  const supabase = await createClient (cookieStore)
  
  const data = await supabase.from("Notes").select()
  console.log("Data: ", data)


  return (
    <div>
      <h1>{data.data?.[1].content}</h1>
    </div>
  )
}
