"use client"

import {
  QueryClientProvider as Provider,
} from "@tanstack/react-query"
import { queryClient } from "./client"

export function QueryClientProvider(props: { children: React.ReactNode }) {
  return (
    <Provider client={queryClient}>{props.children}</Provider>
  )
}
