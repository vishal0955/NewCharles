import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../layout/Layout";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import SuperAdminDashboard from "../pages/Super Admin/SuperAdminDashboard";
import ClientDashboard from "../components/dashboard/ClientDashboard";
import ManagerDashboard from "../components/dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/dashboard/EmployeeDashboard";
import Policy from "../components/AdminHRM/Policy";
import Login from "../authentication/Login";
import NotFound from "../authentication/NotFound";
import Todo from "../components/adminApplication/Todo/Todo";
import High_todo from "../components/adminApplication/Todo/High_todo";
import Medium_todo from "../components/adminApplication/Todo/Medium_todo";
import Low_todo from "../components/adminApplication/Todo/Low_todo";
import SuperAdminLayout from "../layout/SuperAdminLayout";
import EmployeeList from "../components/AdminHRM/EmployeeList";
import Attendance from "../components/AdminHRM/Attendance";
import Plans from "../pages/Super Admin/Plans";
import Document from "../components/AdminHRM/Document";
import WorkDetails from "../components/AdminHRM/WorkDetails";
import UserInfo from "../pages/Super Admin/UserInfo";
import OrderPlan from "../pages/Super Admin/OrderPlan";
import PlanRequest from "../pages/Super Admin/PlanRequest";
import Setting from "../pages/Super Admin/Setting";
import Project from "../components/Project/Project";
import TaskListExample from "../pages/TaskListExample";
import TaskManagementTable from "../components/adminApplication/Todo/Takslist";
// import TodoList from "../components/ToDo/TodoList";
import TodoApp from "../components/ToDo/TodoApp";
import PerformanceAppraisal from "../components/AdminPerformance/PerformanceAppraisal";
import EmployeeGrid from "../components/AdminHRM/EmployeeGrid";
import EmployeeDetails from "../components/AdminHRM/EmployeeDetails";
import Department from "../components/AdminHRM/Department";
import Designations from "../components/AdminHRM/Designations";
import PerformanceIndicator from "../components/AdminPerformance/PerformanceIndicator";
import TaskList from "../components/Task/Task";
import TaskDetail from "../components/Task/TaskDetail";
import AddTask from "../components/Task/AddTask";
import Task from "../components/Task/Task";

import NotesList from "../components/Notes/NotesList";
import NotesGrid from "../components/Notes/NotesGrid";

import AttendanceAdmin from "../components/AdminHRM/Attendance/AttendanceAdmin";
import Holidays from "../components/AdminHRM/Holiday";
import Timesheet from "../components/AdminHRM/Timesheet/Timesheet";
import LeaveSetting from "../components/AdminHRM/Leave/LeaveSetting";
import Leave from "../components/AdminHRM/Leave/LeaveList";
import Overtime from "../components/AdminHRM/Leave/Overtime";
import CustomPolicyModal from "../components/AdminHRM/Leave/CustomPolicyform";

import Job from "../components/Recruitment/Job";
import Schedule from "../components/AdminHRM/Timesheet/Schedule";
import Candidate from "../components/Recruitment/Candidate";
import Refferal from "../components/Recruitment/Refferal";
import Users from "../usermanagement/users";
// import CRMDashboard from "../components/crm/dashboard/CRMDashboard";
import Analytics from "../components/crm/dashboard/Analytics";
import ContactsList from "../components/crm/contact/Contact";
import ShiftRoster from "../components/AdminHRM/ShiftRoster/ShiftRoster";
import EmployeeSalary from "../components/AdminHRM/Payroll/EmployeeSalary";
import ContactDetailPage from "../components/crm/contact/ContactCard";
import Company from "../components/crm/companies/Company";
import CompanyDetails from "../components/crm/companies/CompanyDetails";
import AllQuotes from "../components/crm/allquotes/AllQuotes";
import AllInvoice from "../components/crm/invoice/AllInvoice";
import SalesDashboard from "../components/crm/deals/DealsKanban";
import DealDetails from "../components/crm/deals/DealDetails";
import PaymentList from "../components/crm/Payment/PaymentList";
import NewInvoice from "../components/crm/invoice/NewInvoice";
import PayslipPage from "../components/AdminHRM/Payroll/PayslipPage";
import PayrollItems from "../components/AdminHRM/Payroll/PayrollItems";
import RolesPermission from "../usermanagement/RolesPermission/RolesPermission";
import TrainingList from "../components/Training/TrainingList";

import PayrollOvertime from "../components/AdminHRM/Payroll/PayrollOvertime";
import PayrollDeductions from "../components/AdminHRM/Payroll/PayrollDeductions";
// import PerformanceOverview from "../components/AdminPerformance/PerformanceOverview";
import GoalsOverview from "../components/AdminPerformance/GoalsOverview";
import Compensation from "../components/AdminPerformance/Compensation";
import Telent from "../components/AdminPerformance/Telent";
import IndividualCandidatePage from "../components/Recruitment/IndividualCandidatePage";
import Accountspayable from "../components/finance/accountspayable/Accountspayable";
import AllBills from "../components/finance/accountspayable/Bills/AllBills";
import Remitance from "../components/finance/accountspayable/Remitance/Remitance";
import NewRemitance from "../components/finance/accountspayable/Remitance/NewRemitance";
import NewBill from "../components/finance/accountspayable/Bills/NewBill";
import CreditNotes from "../components/finance/accountspayable/creditnotes/CreditNotes";
import Expense from "../components/finance/accountspayable/Expense/Expense";
import PurchaseOrder from "../components/finance/accountspayable/purchaseorder/PurchaseOrder";
import NewPurchaseOrder from "../components/finance/accountspayable/purchaseorder/NewPurchaseOrder";
import NewCreditNote from "../components/finance/accountspayable/creditnotes/NewCreditNote";
import NewExpenseClaim from "../components/finance/accountspayable/Expense/NewExpenseClaim";
import NewMileageClaim from "../components/finance/accountspayable/Expense/NewMileageClaim";
import Products from "../components/finance/products/Products";
import CreateProduct from "../components/finance/products/CreateProduct";
import CompaniesList from "../components/finance/companies/CompaniesList";
import Suppliers from "../components/finance/suppliers/Suppliers";
import SuppliersCard from "../components/finance/suppliers/SuppliersCard";
import SalesOverview from "../components/finance/accountsrecievable/hincoming_newmenu";
import InventorySidebar from "../components/Inventory/InventorySidebar";
import InventoryDashboard from "../components/Inventory/InventoryDashboard";
import InvetoryLayout from "../components/Inventory/InvetoryLayout";
import OrderList from "../components/Inventory/orderlist/OrderList";
import OrderCard from "../components/Inventory/orderlist/OrderCard";
import CustomerList from "../components/Inventory/customers/CustomerList";
import InventoryList from "../components/Inventory/inventorylist/InventoryList";
import InventoryItemCard from "../components/Inventory/inventorylist/InventoryItemCard";
import ItemCardVariation from "../components/Inventory/inventorylist/ItemCardVariation";
import InventoryPricing from "../components/Inventory/inventorylist/InventoryPricing";
import InventorySetting from "../components/Inventory/inventorylist/InventorySetting";
import InventoryCalendar from "../components/Inventory/calendar/Calendar";
import HelpDeskDashboard from "../components/supportHub/fullsidebar";
import SupporthubLayout from "../components/supportHub/SupporthubLayout";
import Summary from "../components/supportHub/summary_view";
import AnalyticsView from "../components/supportHub/analytics_view";
import TicketManagementSystem from "../components/supportHub/ticket_screen";
import TicketCard from "../components/supportHub/ticketcard";
import HelpDeskSettings from "../components/supportHub/settingpage";
import HelpCenter from "../components/supportHub/knowledgebase";
import Chatbot from "../components/supportHub/chatbox_page";
import ProjectDashboard from "../components/Project/ProjectDetails";
import Dashboard from "../components/Project/ProjectDashboard";
import Files from "../components/Files";
import Social from "../components/Social/Social";
import ResourceTimelineCalendar from "../components/ResourceTimlineCalendar";
import ProjectCalendar from "../components/Project/calendar/ProjectCalendar";
import ProjectTimelineCalendar from "../components/Project/calendar/ProjectTimeline";
import AdminCRMDashboard from "../components/crm/dashboard/AdminCRMDashboard";
import FunctionalCalendar from "../components/Home/Calendar";
import CalendarApp from "../components/Home/CalendarFullCalendar";
import KanbanBoard from "../components/Kanban/Kanban";
import HRDashboard from "../components/HR/Dashboard";
import People from "../components/HR/people";
import RecruitmentPipeline from "../components/HR/recruiting";
import HRAnalyticsDashboard from "../components/HR/organisationDashboard";
import PerformanceOverview from "../components/HR/Performance";
import ProjectDetails from "../components/Project/Cards/ProjectDetails";
import AllProject from "../components/Project/Cards/AllProject";
import Workload from "../components/Project/Workload";
import ProjectCard from "../components/Project/Cards/proj_card";
import ProjectKanban from "../components/KanbanRe/ProjectKanban";
import Recruitmentkanban from "../components/HR/RecruitmentKanban";
import TodoDetail from "../components/ToDo/TodoDetails";
import SalesPipelineKanban from "../components/crm/deals/Deals";
import NoteApp from "../components/Notes/InternalNotes";
import CandidateProfile from "../components/HR/IndividualCandidatePage";
import LeavePage from "../components/AdminHRM/Leave/LeaveList";
import FollowUp from "../components/crm/followup/FollowUp";
import CandidateList from "../components/Recruitment/CandidateList";
import InterviewList from "../components/Recruitment/InterviewList";
import OfferLetter from "../components/Recruitment/OfferLetter";
import TaskDashboard from "../components/Task/TaskDashboard";
import Payments from "../components/ChFinance/Payments";
import Invoices, { InvoicesList } from "../components/ChFinance/InvoicesList";
import InvoiceForm from "../components/ChFinance/InvoiceForm";
import InternalNotes from "../components/Notes/InternalNotes";
import Milestones from "../components/Project/Cards/Milestones";
import MilestonesDetails from "../components/Project/Cards/MilestonesDetails";
import ProjectReports from "../components/Project/Cards/ProjectReports";
import ProjectReportsDetails from "../components/Project/Cards/ProjectReportsDetails";
import Invoice from "../components/ChFinance/Invoice";
import TaxDashboard from "../components/ChFinance/TaxDashboard";
import PayoutSettings from "../components/ChFinance/Payout/Payout";
import PayoutDetails from "../components/ChFinance/Payout/PAyOutDetails";
import ManagerFeedback from "../components/AdminHRM/Performance/Manager/ManagerFeedback";
import ReviewSummary from "../components/AdminHRM/Performance/ReviewSummary";
import TaxDetails from "../components/ChFinance/TaxDetails";
import ExpenseList from "../components/ChFinance/Expense/Expense";
import SalaryDisbursement from "../components/ChFinance/salary/SalaryDisbursement";
import SalaryDetails from "../components/ChFinance/salary/SalaryDetails";
import ExpenseDetail from "../components/ChFinance/Expense/ExpenseDetails";
import SharedNotesPage from "../components/Notes/ShareNotes";
import KPITable from "../components/AdminHRM/Performance/KPITable";
import SelfAssessment from "../components/AdminHRM/Performance/SelfAssessment";
import AppraisalDetailPage from "../components/AdminHRM/Performance/AppraisalDetailsPage";
import KPIDetailPage from "../components/AdminHRM/Performance/KPIDetailPage";
import AppraisalPage from "../components/AdminHRM/Performance/AppraisalPage";
import Reminders from "../components/Notes/Reminders";
import QuickLinks from "../components/Notes/QuickLinks";
import Utilities from "../components/Notes/Utilities.jsx";
import UtilitiesPanel from "../components/Notes/Utilitieslist.jsx";
import FeedbackPage from "../components/AdminHRM/Performance/Manager/FeedbackPage.jsx";
import InterviewManagementSystem from "../components/Recruitment/AddInterview.jsx";
import CreateOffer from "../components/Recruitment/CreateOffer.jsx";
import KPIForm from "../components/AdminHRM/Performance/KPIForm.jsx";

const RoleBasedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/not-found" element={<NotFound />} />

      <Route path="/superadmin" element={<SuperAdminLayout />}>
        <Route index element={<SuperAdminDashboard />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="plans" element={<Plans/>} />
        <Route path="user_info" element={<UserInfo />} />
        <Route path="order_plan" element={<OrderPlan />} />
        <Route path="plan_request" element={<PlanRequest />} />
        <Route path="settings" element={<Setting />} />
      </Route>

      {/* Admin Routes */}

      <Route element={<Layout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* New Dashboard Routes */}
        <Route  path="/analytics" element={<Analytics />} />
        <Route path="/hr/dashboard" element={<HRAnalyticsDashboard />} />

        <Route path="/sales/dashboard" element={<AdminCRMDashboard />} />

        {/* calendar */}

        <Route path="/homecalendar" element={<FunctionalCalendar />} />

        <Route path="/fullcalendar" element={<CalendarApp />} />

        <Route path="/todo" element={<TodoApp />} />

        {/*  New Notes  */}
        <Route path="/notes/personalnotes" element={<InternalNotes />} />
        <Route path="/notes/sharednotes" element={<SharedNotesPage />} />

        {/* Notes Route  */}
        <Route path="/notesgrid" element={<NotesGrid />} />
        <Route path="/noteslist" element={<NotesList />} />
        <Route path="/internalnotes" element={<NoteApp />} />

        {/* <Route path="/sharednotes" element={<SharedNotesPage />} /> */}
        <Route path="/notes/reminders" element={<Reminders />} />
        <Route path="/notes/quicklinks" element={<QuickLinks />} />
        {/* <Route path="/notes/utitlities" element={<Utilities />} /> */}
        {/* <Route path="/notes/utitlities" element={<UtilitiesPanel />} /> */}

        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/tododetails" element={<TodoDetail />} />
        <Route path="/kanban" element={<KanbanBoard />} />

        {/* Task Routes  */}
        <Route path="/task" element={<TaskDashboard />} />
        
        <Route path="/task/highpriority" element={<Task />} />
<Route path="/task/mediumpriority" element={<Task />} />
<Route path="/task/lowpriority" element={<Task />} />


        {/* Project Route */}
        <Route path="/project" element={<Dashboard />} />
       
        <Route path="/project/projectdetails" element={<ProjectDetails />} />

        <Route path="/project/projects" element={<Project />} />
        {/* <Route path="/project/task" element={<Task />} /> */}

        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/allproject" element={<AllProject />} />
        <Route path="/projectcard" element={<ProjectCard />} />

        <Route path="/project/schedule" element={<ProjectCalendar />} />
        <Route path="/projectkanban" element={<ProjectKanban />} />

        {/* PRoject New Routes  */}

        <Route path="/project/Milestones" element={<Milestones/>} />
        <Route path="/project/MilestonesDetails" element={<MilestonesDetails />} />
        <Route path="/project/reports" element={<ProjectReports />} />
        <Route path="/project/reportsDetails" element={<ProjectReportsDetails />} />

        {/* HR Routes */}
        <Route path="/hr/dashboard" element={<HRDashboard />} />
        
        <Route path="/hr/myprofile" element={<EmployeeDetails />} />
        <Route path="/hr/people" element={<People />} />
        <Route path="/hr/performance" element={<PerformanceOverview />} />
        <Route path="/hr/recruitment" element={<Recruitmentkanban />} />
        <Route path="/hr/company" element={<HRAnalyticsDashboard />} />
        <Route path="/hr/individualcandidate" element={<CandidateProfile />} />

        {/* new  routes hr */}
        <Route path="/hr/employeelist" element={<EmployeeList />} />
        <Route path="/hr/attendance" element={<AttendanceAdmin />} />
        <Route path="/hr/payroll" element={<EmployeeSalary />} />
        <Route path="/hr/payrollitem" element={<PayrollItems />} />
        <Route path="/hr/leavetracker" element={<LeavePage />} />
        { <Route path="/hr/documents" element={<Files />} />}





        {/* crm-section */}
        {/* <Route path="/crm/customers" element={<ContactsList />} /> */}
        <Route path="/crm/contacts" element={<ContactsList />} />
        <Route path="/crm/contactdetails" element={<ContactDetailPage />} />

        <Route path="/crm/companies" element={<Company />} />
        <Route path="/crm/companydetails" element={<CompanyDetails />} />

        <Route path="/crm/quotes" element={<AllQuotes />} />
        <Route path="/crm/invoices" element={<AllInvoice />} />
        <Route path="/crm/analytics" element={<Analytics />} />

        <Route path="/crm/deals" element={<SalesDashboard />} />

        <Route path="/deals" element={<SalesPipelineKanban />} />
        <Route path="/crm/dealdetails" element={<DealDetails />} />

        <Route path="/crm/Payment" element={<PaymentList />} />

        <Route path="/crm/followup" element={<FollowUp />} />
        

        {/*  CRM Routes  */}

        {/* <Route path="/crm/dashboard" element={<CRMDashboard />} /> */}
        <Route path="/crm/dashboard" element={<AdminCRMDashboard />} />

        

        {/* crm-section */}
        {/* recruitment */}
        <Route path="/recruitment/jobs" element={<Job />} />
        <Route path="/recruitment/candidate" element={<CandidateList />} />
        <Route path="/recruitment/refferals" element={<Refferal />} />
        <Route path="/recruitment/interview" element={<InterviewList />} />
        <Route path="/recruitment/offerletter" element={<OfferLetter />} />
        <Route path="/recruitment/createoffer" element={<CreateOffer />} />

       

        <Route
          path="/recruitment/individualcandidatepage"
          element={<IndividualCandidatePage />}
        />
        {/* recruitment */}

        {/* <Route path="/todolist" element={<TodoList />} /> */}
        <Route path="/tasklist" element={<TaskListExample />} />

        <Route path="/employeegrid" element={<EmployeeGrid />} />
        <Route
          path="/employeelist"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeList></EmployeeList>
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/employeedetails"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        /> */}

        {/* <Route path="/tasklist" element={<TaskListExample />} /> */}
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/tasklist" element={<TaskListExample />} />

        <Route
          path="/hrm/attendance/shift_schedule"
          element={<Schedule />}
        ></Route>

        <Route
          path="/hrm/attendance/shiftroster"
          element={<ShiftRoster></ShiftRoster>}
        ></Route>

        <Route
          path="/performanceindicator"
          element={<PerformanceIndicator></PerformanceIndicator>}
        ></Route>

        {/* Training */}
        <Route path="/hrm/training/training_list" element={<TrainingList />} />

        <Route
          path="/performaceoverview"
          element={<PerformanceOverview></PerformanceOverview>}
        ></Route>

        <Route
          path="/goalsoverview"
          element={<GoalsOverview></GoalsOverview>}
        ></Route>

        <Route
          path="/compensation"
          element={<Compensation></Compensation>}
        ></Route>

        <Route path="/telent" element={<Telent></Telent>}></Route>
        <Route
          path="/employeesalary"
          element={<EmployeeSalary></EmployeeSalary>}
        ></Route>
        <Route
          path="/performaceappraisal"
          element={<PerformanceAppraisal></PerformanceAppraisal>}
        ></Route>

        <Route
          path="/payroll/overtime"
          element={<PayrollOvertime></PayrollOvertime>}
        ></Route>

        <Route
          path="/employee/:id"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <EmployeeDetails></EmployeeDetails>
            </ProtectedRoute>
          }
        />
        <Route
          path="/workdetails"
          element={<WorkDetails></WorkDetails>}
        ></Route>

        <Route path="/document" element={<Document></Document>}></Route>
        <Route path="/attendance" element={<Attendance></Attendance>}></Route>

        {/*  lave */}
        <Route path="/hrm/attendance/leaves" element={<Leave />} />

        <Route
          path="/hrm/attendance/list"
          element={<AttendanceAdmin />}
        ></Route>

        <Route
          path="/department"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <Department></Department>
            </ProtectedRoute>
          }
        />
        <Route
          path="/designations"
          element={
            <ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
              <Designations></Designations>
            </ProtectedRoute>
          }
        />

        <Route
          path="/payslip/:id"
          element={<PayslipPage></PayslipPage>}
        ></Route>

        <Route
          path="/payrollitem"
          element={<PayrollItems></PayrollItems>}
        ></Route>

        <Route
          path="/payroll/deductions"
          element={<PayrollDeductions></PayrollDeductions>}
        ></Route>

        <Route path="/hrm/holiday" element={<Holidays />}></Route>

        <Route path="/hrm/attendance/timesheet" element={<Timesheet />} />

        <Route
          path="/hrm/attendance/leave_settings"
          element={<LeaveSetting />}
        />

        <Route path="/hrm/attendance/overtime" element={<Overtime />} />

        <Route path="/addcustompolicy" element={<CustomPolicyModal />}></Route>

        <Route path="/tasklist1" element={<TaskManagementTable />} />
        <Route path="/projectlist" element={<Project />} />

        <Route path="/high" element={<High_todo></High_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Medium" element={<Medium_todo></Medium_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client", "admin"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/Low" element={<Low_todo></Low_todo>}></Route>
        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/* New Performance Route */}

        <Route path="/performance/managerfeedback" element={<ManagerFeedback />} />
        <Route path="/feedbackdetails" element={<FeedbackPage />} />
        <Route path="/performance/reviewsummary" element={<ReviewSummary />} />
        
          <Route
            path="/performance/appraisalpage"
            element={<AppraisalPage />}
          />
        
        <Route path="/performance/kpitable" element={<KPITable />} />

        <Route path="/performance/kpiform" element={<KPIForm />} />
        {
          <Route
            path="/performance/selfassessment"
            element={<SelfAssessment />}
          />
        }

        {/* AppraisePage */}

        <Route
          path="/appraisedetailpage/:id"
          element={<AppraisalDetailPage />}
        />

        <Route path="/kpi/:id" element={<KPIDetailPage/>} />

        

        {/*  New finance Routes  */}

        <Route path="/finance/payment" element={<Payments />} />
        <Route path="/finance/invoiceslist" element={<InvoicesList />} />
        <Route path="/finance/invoiceform" element={<InvoiceForm />} />

        <Route path="/finance/invoice" element={<Invoice />} />
        <Route path="/finance/tax" element={<TaxDashboard />} />

        <Route path="/finance/taxdetails" element={<TaxDetails />} />
         <Route path="/finance/payout" element={<PayoutSettings />} />

         <Route path="/finance/expenselist" element={<ExpenseList />} />
         <Route path="/finance/expensedetails" element={<ExpenseDetail />} />

        <Route path="/finance/salarydisbursement" element={<SalaryDisbursement />} />
        <Route path="/finance/salarydetails" element={<SalaryDetails />} />


         <Route path="/finance/payoutdetails" element={<PayoutDetails />} />
        {/* Finance Routes */}

        <Route path="/finance/accounts_payable" element={<Accountspayable />} />

        <Route path="/finance/allbills" element={<AllBills />} />
        <Route path="/finance/newbill" element={<NewBill />} />

        <Route path="/finance/remittance" element={<Remitance />} />
        <Route path="/finance/newremitance" element={<NewRemitance />} />

        <Route path="/finance/creditnotes" element={<CreditNotes />} />
        <Route path="/finance/newcreditnote" element={<NewCreditNote />} />

        <Route path="/finance/expense" element={<Expense />} />
        <Route path="/finance/newexpenseclaim" element={<NewExpenseClaim />} />
        <Route path="/finance/newmileageclaim" element={<NewMileageClaim />} />
        <Route path="/finance/Purchaseorder" element={<PurchaseOrder />} />
        <Route
          path="/finance/newpurchaseorder"
          element={<NewPurchaseOrder />}
        />

        {/* accounts Recievable */}

        <Route
          path="/finance/accounts_receivable"
          element={<SalesOverview />}
        />
        <Route path="/finance/products" element={<Products />} />
        <Route path="/finance/createproduct" element={<CreateProduct />} />
        <Route path="/finance/companies" element={<Company />} />
        <Route path="/finance/suppliers" element={<Suppliers />} />
        <Route path="/finance/createsupplier" element={<SuppliersCard />} />

        {/* Administration */}

        {/* <Route
          path="/admininistration/user_management/users"
          element={<Users />}
        /> */}
        <Route
          path="/admininistration/user_management/roles_permissions"
          element={<RolesPermission />}
        />

        <Route
          path="/admininistration/user_management/users"
          element={<Users />}
        />

        {/* Inventory Routes */}
        <Route path="/inventory" element={<InvetoryLayout />}>
          <Route index element={<InventoryDashboard />} />
          <Route path="/inventory/dashboard" element={<InventoryDashboard />} />
          <Route path="/inventory/orderlist" element={<OrderList />} />
          <Route path="/inventory/ordercard" element={<OrderCard />} />
          <Route path="/inventory/customerslist" element={<CustomerList />} />
          <Route path="/inventory/inventory" element={<InventoryList />} />
          <Route path="/inventory/itemcard" element={<InventoryItemCard />} />
          <Route
            path="/inventory/itemcard_variations"
            element={<ItemCardVariation />}
          />
          <Route
            path="/inventory/itemcard_pricing"
            element={<InventoryPricing />}
          />
          <Route
            path="/inventory/itemcard_settings"
            element={<InventorySetting />}
          />
          <Route path="/inventory/calendar" element={<InventoryCalendar />} />
        </Route>

        {/* Support Hub */}
        <Route path="/support" element={<SupporthubLayout />}>
          {/* inside Layout  */}
          <Route index element={<Summary />} />
          <Route path="/support/summary" element={<Summary />} />
          <Route path="/support/analytics" element={<AnalyticsView />} />
          <Route path="/support/tickets" element={<TicketManagementSystem />} />
          <Route path="/support/ticketcard" element={<TicketCard />} />
        </Route>
        <Route path="/support/settings" element={<HelpDeskSettings />} />
        <Route path="/support/knowledgebase" element={<HelpCenter />} />
        <Route path="/support/chatbot" element={<Chatbot />} />

        {/* Files */}
        <Route path="/files" element={<Files />}></Route>
        <Route path="/social" element={<Social />}></Route>

        <Route path="/calendar" element={<ResourceTimelineCalendar />} />

        <Route path="/resourcecalendar" element={<ProjectCalendar />} />
        <Route
          path="/ProjectTimelineCalendar"
          element={<ProjectTimelineCalendar />}
        />
        <Route path="/project/workload" element={<Workload />} />

        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoleBasedRoutes;
