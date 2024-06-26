import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecommended } from "../api/api";

type Props = {
  size?: number;
  excludes: number | string;
};

export default function useGetRecommended({ size, excludes }: Props) {
  return useQuery({ queryKey: ["recommended"], queryFn: () => getRecommended({ size, excludes }) });
}
