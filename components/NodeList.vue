<template>
  <div class="min-w-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div v-if="!isGameFinished" class="grid grid-cols-4 gap-8 max-w-96">
      <NodeComponent
        v-for="node in nodes"
        :key="node.id"
        :id="node.id"
        :value="node.value"
        :isActive="node.isActive"
        :isDone="node.isDone"
        @flip="handleFlipNode"
      />
    </div>

    <h3 v-else class="animate-bounce text-center">
      <span class="block text-3xl font-bold">Congratulations!</span>
      <span class="text-xl"
        >You finished the game with a time of
        <span class="underline">{{ timer }}</span> seconds</span
      >
    </h3>
  </div>
</template>

<script setup lang="ts">
import { shuffleArray } from '~/scripts/utils';

interface NodeInterface {
  id: number;
  value: number;
  isActive: boolean;
  isDone: boolean;
}

class Node implements NodeInterface {
  static id = 1;
  private _id: number;
  private _value: number;
  private _isActive: boolean;
  private _isDone: boolean;

  constructor(value: number) {
    this._id = Node.id++;
    this._value = value;
    this._isActive = false;
    this._isDone = false;
  }

  get id(): number {
    return this._id;
  }

  get value(): number {
    return this._value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(newValue: boolean) {
    this._isActive = newValue;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(newValue: boolean) {
    this._isDone = newValue;
  }
}

// DEFAULT NUMBER OF NODES
const size = 16;
const nodes = ref<NodeInterface[]>([]);
const isGameFinished = useGame();
const timer = useTimer();

// Tracking of the current nodes that are active
const previousFlippedNode = ref<null | NodeInterface>(null);
const currentFlippedNode = ref<null | NodeInterface>(null);

// Filling the array full of nodes with the given size
for (let i = 0; i < size / 2; i++) {
  nodes.value.push(new Node(i + 1));
  nodes.value.push(new Node(i + 1));
}

nodes.value = shuffleArray(nodes.value);

// A function used to get specific node by the node's id
const getNodeById = (
  nodes: NodeInterface[],
  id: number
): NodeInterface | undefined => {
  return nodes.find((node) => node.id === id);
};

// Reset the nodes and the value of previous and current flipped nodes
const resetActiveNodes = (): void => {
  previousFlippedNode.value = null;
  currentFlippedNode.value = null;
};

const setActiveNodesStatus = (status: boolean): void => {
  if (previousFlippedNode.value === null || currentFlippedNode.value === null) {
    return;
  }

  previousFlippedNode.value.isActive = status;
  currentFlippedNode.value.isActive = status;
};

const setActiveNodesAsDone = (): void => {
  if (previousFlippedNode.value === null || currentFlippedNode.value === null) {
    return;
  }

  previousFlippedNode.value.isDone = true;
  currentFlippedNode.value.isDone = true;
};

// Check both previousFlippedNode and currentFlippedNode if their value is the same
const isActiveNodesCorrect = (): boolean => {
  if (!previousFlippedNode.value || !currentFlippedNode.value) return false;
  return previousFlippedNode.value.value === currentFlippedNode.value.value;
};

// A function used to set the node to active
const setNodeActive = (node: NodeInterface): NodeInterface | null => {
  if (previousFlippedNode.value !== null && currentFlippedNode.value !== null)
    return null;

  node.isActive = true;

  if (currentFlippedNode.value !== null) {
    if (node === currentFlippedNode.value) {
      return null;
    }

    previousFlippedNode.value = currentFlippedNode.value;
    currentFlippedNode.value = node;

    if (!isActiveNodesCorrect()) {
      setTimeout(() => {
        setActiveNodesStatus(false);
        resetActiveNodes();
      }, 1000);
    } else {
      setTimeout(() => {
        setActiveNodesAsDone();
        resetActiveNodes();
      }, 500);
    }
  } else {
    currentFlippedNode.value = node;
  }
  return currentFlippedNode.value;
};

// Event listener when the node is flipped
const handleFlipNode = (id: number) => {
  const selectedNode = getNodeById(nodes.value, id);

  if (selectedNode === undefined) return;
  setNodeActive(selectedNode);
};

const setStatusOfAllNodes = (
  status: boolean,
  prop: 'isActive' | 'isDone' = 'isActive'
): void => {
  nodes.value.forEach((node) => (node[prop] = status));
};

setTimeout(() => {
  setStatusOfAllNodes(true);
}, 500);

setTimeout(() => {
  setStatusOfAllNodes(false);
}, 5000);

const isAllNodesDone = () => {
  return nodes.value.every((node) => node.isDone);
};

watchEffect(() => {
  if (isAllNodesDone()) {
    isGameFinished.value = true;
  }
});

const reset = useReset();

watchEffect(() => {
  console.log(reset.value);
  if (reset.value) {
    setStatusOfAllNodes(false, 'isActive');
    setStatusOfAllNodes(false, 'isDone');

    setTimeout(() => {
      setStatusOfAllNodes(true);
    }, 500);

    setTimeout(() => {
      setStatusOfAllNodes(false);
    }, 5000);

    reset.value = false;
  }
});
</script>
