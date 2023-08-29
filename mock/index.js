import Mock from "mockjs";

import System from "./system";
// 系统设置/主系统/菜单设置
Mock.mock(/\/system\/admin\/group\/index/, "get", System.index);
