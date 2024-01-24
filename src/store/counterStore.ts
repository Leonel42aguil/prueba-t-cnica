import create from "zustand";

//Estado retulizable parecido a redux pero mas simplificado 
interface CounterState {
    count: number
    nombre: string
}

export const useCounterStore = create<CounterState>(() => ({
    count: 10,
    nombre: "Leonel"
}))