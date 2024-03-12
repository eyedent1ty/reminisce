<template>
  <div
    class="grid grid-cols-4 gap-8 max-w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <NodeComponent
      v-for="node in nodes"
      :key="node.id"
      :id="node.id"
      :value="node.value"
      :isActive="node.isActive"
      @flip="handleFlipNode"
    />
  </div>
</template>

<script setup lang="ts">
interface NodeInterface {
  id: number;
  value: number;
  isActive: boolean;
}

class Node implements NodeInterface {
  static id = 1;
  private _id: number;
  private _value: number;
  private _isActive: boolean;

  constructor(value: number) {
    this._id = Node.id++;
    this._value = value;
    this._isActive = false;
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
}

// DEFAULT NUMBER OF NODES
const size = 16;
const nodes = ref<NodeInterface[]>([]);

// Tracking of the current nodes that are active
const previousFlippedNode = ref<null | NodeInterface>(null);
const currentFlippedNode = ref<null | NodeInterface>(null);

// Filling the array full of nodes with the given size
for (let i = 0; i < size / 2; i++) {
  nodes.value.push(new Node(i + 1));
  nodes.value.push(new Node(i + 1));
}

// A function used to shuffle nodes
const shuffleNodes = (nodes: NodeInterface[]): NodeInterface[] => {
  const nodesCopy = [...nodes];
  const len = nodesCopy.length;

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * (len - i) + i);
    const temp = nodesCopy[randomIndex];
    const currentNode = nodesCopy[i];
    nodesCopy[randomIndex] = currentNode;
    nodesCopy[i] = temp;
  }

  return nodesCopy;
};

nodes.value = shuffleNodes(nodes.value);

// A function used to get specific node by the node's id
const getNodeById = (
  nodes: NodeInterface[],
  id: number
): NodeInterface | undefined => {
  return nodes.find((node) => node.id === id);
};

const resetActiveNodes = () => {
  if (!previousFlippedNode.value || !currentFlippedNode.value) return;

  previousFlippedNode.value.isActive = false;
  currentFlippedNode.value.isActive = false;
  previousFlippedNode.value = null;
  currentFlippedNode.value = null;
};

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
    previousFlippedNode.value = currentFlippedNode.value;
  }
  currentFlippedNode.value = node;

  return currentFlippedNode.value;
};

const handleFlipNode = (id: number) => {
  const selectedNode = getNodeById(nodes.value, id);

  if (selectedNode === undefined) return;
  setNodeActive(selectedNode);
};

watch(previousFlippedNode, () => {
  if (!isActiveNodesCorrect()) {
    setTimeout(() => {
      resetActiveNodes();
    }, 1000);
  }
});
</script>
