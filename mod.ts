import * as tf from "https://esm.sh/@tensorflow/tfjs@4.22.0"

const model = tf.sequential()

model.add(tf.layers.dense({
    units: 1,
    inputShape: [1],
}))

model.add(tf.layers.dense({
    units: 1,
}))

model.setWeights([
    tf.tensor([[2]]),
    tf.tensor([0]),
    tf.tensor([[3]]),
    tf.tensor([0]),
])

const result = model.predict(tf.tensor2d([123], [1, 1])) as tf.Tensor

console.log(
    await result.data()
)
