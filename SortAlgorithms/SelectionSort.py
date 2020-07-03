import random;

inputs = [7, 5, 1, 8, 3, ];
    
def selection_sort(inputs):
    size = len(inputs);
    min_index = 0;

    for j in range(size - 1):
        min_index = j;
        for i in range(j, size):
            if inputs[i] < inputs[min_index]:
                min_index = i;
            if inputs[j] > inputs[min_index]:
                helper = inputs[j];
                inputs[j] = inputs[min_index];
                inputs[min_index] = helper;
    print(inputs);

selection_sort(any_inputs);