export default function removeChildren(parent) {
  if(parent.lastChild){
    parent.removeChild(parent.lastChild);
    removeChildren(parent);
  } else {
    return;
  }
}