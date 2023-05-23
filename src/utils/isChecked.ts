export const isChecked = (id: number): boolean => {
  const favouritesIds: string[] = JSON.parse(
    localStorage.getItem("ids") || "[]"
  );

  return favouritesIds.includes(id.toString());
};
