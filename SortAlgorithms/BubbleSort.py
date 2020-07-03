
inputs = [7, 5, 1, 8, 3, ];

def bubble_sort(inputs):
    size = len(inputs) - 1;
    for j in range(size):
        for i in range(size):
            if (inputs[i] > inputs[ i + 1]):
                helper = inputs[i];
                inputs[i] = inputs[i + 1];
                inputs[i + 1] = helper;

    print(inputs);

bubble_sort(inputs);