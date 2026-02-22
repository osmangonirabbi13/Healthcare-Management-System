import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.routes";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRoutes } from "../module/user/user.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";
import { scheduleRoutes } from "../module/schedule/schedule.route";
import { AppointmentRoutes } from "../module/appointment/appointment.route";
import { DoctorScheduleRoutes } from "../module/doctorSchedule/doctorSchedule.routes";
import { AdminRoutes } from "../module/admin/admin.routes";
import { PatientRoutes } from "../module/patient/patient.routes";
import { ReviewRoutes } from "../module/review/review.route";
import { PrescriptionRoutes } from "../module/prescription/prescription.route";
import { StatsRoutes } from "../module/stats/stats.routes";

const router = Router();

router.use("/specialties", SpecialtyRoutes);
router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/patients", PatientRoutes)
router.use("/doctors", DoctorRoutes)
router.use("/schedules", scheduleRoutes)
router.use("/appointments", AppointmentRoutes)
router.use("/doctor-schedules", DoctorScheduleRoutes)
router.use("/admins", AdminRoutes)
router.use("/stats", StatsRoutes)
router.use("/prescriptions", PrescriptionRoutes)
router.use("/reviews", ReviewRoutes)
export const IndexRoutes = router;
