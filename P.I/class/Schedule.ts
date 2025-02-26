class Schedule  {
    order: Service[];

    constructor() {
        this.order = [];
    }

    addOrder(order: Service){
        this.order.push(order);
    }

    listOrderPending(){
        return this.order.filter(order => order.getStatus() === 'pendente');
    }
}