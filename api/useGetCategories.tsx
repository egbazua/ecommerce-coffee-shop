import { useEffect, useState } from "react"

export const useGetCategories = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()

        setResult(json.data)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)

        console.error(error)
      }
    }

    )()
  }, [url])

  return { loading, result, error }
}
