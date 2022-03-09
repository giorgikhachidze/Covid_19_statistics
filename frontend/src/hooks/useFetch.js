import {useEffect, useState} from "react"
import axiosInstance from "../axiosInstance";

export default function useFetch(url, initialParams) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [params, setParams] = useState(initialParams)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await axiosInstance.get(url, {
            params: params
          })
          setData(response.data.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [params, url])

  return {setParams, data, loading, error}
}