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

for (let i = 0; i < size / 2; i++) {
  nodes.value.push(new Node(i + 1));
  nodes.value.push(new Node(i + 1));
}

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

  return nodesCopy
};

nodes.value = shuffleNodes(nodes.value);

const getNodeById = (nodes: NodeInterface[], id: number): NodeInterface | undefined => {
  return nodes.find((node) => node.id === id);
}

const handleFlipNode = (id: number) => {
  const selectedNode = getNodeById(nodes.value, id);

  if (!selectedNode) return;

  selectedNode.isActive = true;
};
</script>
