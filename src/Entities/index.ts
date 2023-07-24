import { Budget } from "./budget.entity";
import { Configuration } from "./configuration.entity";
import { Customer } from "./customer.entity";
import { DetailBudget } from "./detail-budget.entity";
import { User } from "./user.entity";

const entities = [User, Customer,Budget, DetailBudget, Configuration];

export {User, Customer, Budget, DetailBudget, Configuration};

export default entities;