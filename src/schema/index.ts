import { z } from "zod";

export const OrderSchema = z.object({
    name: z.string()
        .min(1, 'El nombre es obligatorio para realizar el pedido'),
    total: z.number()
        .min(1, 'Algo no está correcto en la orden'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number(),
    }))
})

export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform((value) => parseInt(value))
                .refine(value => value > 0, {message: 'Hay algunos errores'})
})

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message: 'El campo de búsqueda es obligatorio'})
})